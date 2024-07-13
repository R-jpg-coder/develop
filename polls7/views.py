from django.http import HttpResponse, HttpResponseNotFound, Http404
 from django.shortcuts import render

 from .models import Question
 # Create your views here.


 def index(request):
     # - sign to get more recent, list is ordered from 0 to 4
     latest_question_list = Question.objects.order_by('-pub_date')[:5]
     context = {
         'latest_question_list': latest_question_list,
     }
     return render(request, 'polls/index.html', context)


 def detail(request, question_id):
     try:
        question = Question.objects.get(pk=question_id)
     except Question.DoesNotExist:
        return HttpResponseNotFound("Question does not exist")
     return render(request, 'polls/detail.html', {'question': question})


 def results(request, question_id):
     response = "You're looking at the results of question %s."
     return HttpResponse(response % question_id)


 def vote(request, question_id):
    return HttpResponse("You're voting on question %s." % question_id)

# Leave the rest of the views (detail, results, vote) unchanged