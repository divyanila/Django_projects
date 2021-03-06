from django.contrib import admin
from .models import Question,Choice



class QuestionAdmin(admin.ModelAdmin):
    model = Question
    list_display = ('question_text', 'pub_date')
    fieldsets = [
        (None,               {'fields': ['question_text']}),
        ('Date information', {'fields': ['pub_date']}),
    ]


admin.site.register(Question, QuestionAdmin)

