from rest_framework import serializers 
from blog.models import Student

class StudentSerializer(serializers.Serializer):
    name= serializers.CharField(max_length=100)
    cls= serializers.IntegerField(default=None)
    school= serializers.CharField(max_length=200)

    def create(self, validated_data):
        return Student.objects.create(**validated_data)

    def update(self,instance, validated_data):
        print('the instance is: ',instance)
        instance.name= validated_data.get('name',instance.name)
        instance.cls= validated_data.get('cls',instance.cls)
        instance.school= validated_data.get('school',instance.school)
        instance.save()
        return instance

    def delete(self,instance):
        instance.delete()