from blog.serializers import StudentSerializer
from django.http.response import HttpResponse
from django.shortcuts import render
from blog.models import Student
import io
from rest_framework.parsers import JSONParser
from rest_framework.renderers import JSONRenderer
from django.views.decorators.csrf import csrf_exempt
from django.http import JsonResponse
# Create your views here.

def index(request):
    return HttpResponse('hello from Blog')

@csrf_exempt
def studentCreate(request):
    if request.method == 'POST':
        print('view function rec-d a post request')
        json_data= request.body
        print('the body of response',json_data)
        stream= io.BytesIO(json_data)
        print('the data in stream is: ',stream)
        python_data= JSONParser().parse(stream)
        print('after parsing from stream json ',python_data)
        serialized_data= StudentSerializer(data=python_data)
        print('the serialiesd data is: ',serialized_data)
        if serialized_data.is_valid():
            print('the serialized data is valid')
            serialized_data.save()
            print('data saved successfully')
            res= { 'msg': 'Data Created'}
            jsn_data= JSONRenderer().render(res)
            return HttpResponse(jsn_data)
        print('the serialized data is invalid')
        err_data= JSONRenderer().render(serialized_data.errors)
        return HttpResponse(err_data)
    return HttpResponse('no post request')


@csrf_exempt
def retrieveStudent(request):
    if request.method == 'GET':
        print('view function rec-d a get request')
        json_data= request.body
        print('the body is: ',json_data)
        stream= io.BytesIO(json_data)
        python_data= JSONParser().parse(stream)
        iD= python_data.get('id',None)
        if iD is not None:
            print('rec-d a ID =>',iD)
            student_obj= Student.objects.get(id= iD)
            serialized_data= StudentSerializer(student_obj)
            json_data= JSONRenderer().render(serialized_data.data)
            return HttpResponse(json_data)
        print('no id rec-d')
        student_obj= Student.objects.all()
        print('all student data: ',student_obj)
        serialized_data= StudentSerializer(student_obj,many=True)
        print('the serialized data is: ',serialized_data)
        json_data= JSONRenderer().render(serialized_data.data)
        return HttpResponse(json_data)
    return HttpResponse('request should be get only')

@csrf_exempt
def updateStudent(request):
    if request.method == 'PUT':
        print('view function rec-d a put request')
        data= request.body
        stream= io.BytesIO(data)
        python_data= JSONParser().parse(stream)
        print('the python_data is: ',python_data)
        iD= python_data.get('id',None)
        print('the id rec-d is: ',iD)
        stdnt_obj= Student.objects.get(id=iD)
        print('matching data from orm for id is: ',stdnt_obj)
        serialized_data= StudentSerializer(stdnt_obj, data= python_data,partial=True)
        print('after serialiesing the data is: ',serialized_data)
        if iD is not None:
            if serialized_data.is_valid():
                serialized_data.save()
                res= {'msg':'Updated successfully'}
                return JsonResponse(res)
        elif iD is None:
            return HttpResponse('please provide id properly')
        else:
            return HttpResponse(f"the id {iD} provided by you is invalid")
    else:
        return HttpResponse('please provide put request only')

@csrf_exempt
def delete_Student(request):
    if request.method == 'DELETE':
        res= {'msg':'please provide the id'}
        data= request.body
        stream= io.BytesIO(data)
        python_data= JSONParser().parse(stream)
        iD= python_data.get('id',None)
        if iD is not None:
            try:
                stdnt_obj= Student.objects.get(id=iD)
                stdnt_obj.delete()
                res['msg']= 'Deleted successfully'
                return JsonResponse(res)
            except Student.DoesNotExist:
                res['msg']= 'Student from this ID is not available'
                return JsonResponse(res)
        else:
            return HttpResponse('this data is unavailable or already deleted')
        return JsonResponse(res)