# Generated by Django 4.0 on 2021-12-18 11:28

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('data_view', '0003_alter_ville_std_deviation'),
    ]

    operations = [
        migrations.AlterField(
            model_name='ville',
            name='std_deviation',
            field=models.FloatField(blank=True, default=0, null=True),
        ),
    ]
