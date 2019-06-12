import Vue from 'vue'
import Router from 'vue-router'
import HelloWorld from '@/components/HelloWorld'
import Exam from '@/components/exam'
import Question_bank from '@/components/question_bank'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/exam',
      name: 'exam',
      component: exam
    },
    {
      path: '/',
      name: 'question_bank',
      component: question_bank
    },
  ],
  mode:'history'

})
