from django.db import models

# Create your models here.
class Member(models.Model):
  log = models.TextField()
  item = models.CharField(max_length=255)
  cclass = models.CharField(max_length=255)