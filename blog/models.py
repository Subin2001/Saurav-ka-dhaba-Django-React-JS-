from django.db import models

# Create your models here.

class Student(models.Model):
    performance_choices= [
        ('A','A'),
        ('B','B'),
        ('C','C'),
        ('D','D'),
        ('E','E'),
    ]
    name= models.CharField(max_length=100)
    cls= models.IntegerField(default=None)
    section= models.CharField(max_length=200)
    roll_no= models.IntegerField(null=True,default=None)
    physical_fitness=  models.CharField(max_length=2,choices=performance_choices,default='B')
    mental_fitness= models.CharField(max_length=2,choices=performance_choices,default='B')

    def __str__(self):
        return self.name

