# Generated by Django 5.0.4 on 2024-06-16 19:15

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('api_test', '0005_alter_filemodel_download_date'),
    ]

    operations = [
        migrations.AlterField(
            model_name='filemodel',
            name='download_date',
            field=models.CharField(null=True),
        ),
    ]