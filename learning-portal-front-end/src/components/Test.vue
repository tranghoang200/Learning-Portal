<template>
  <div>
    <h1>{{nameCourses}}</h1>
    {{ data }}
    <Countdown
      :end="new Date(new Date().getTime() + 60000)"
      showMinutes
      showSeconds
      :endFunction="finish"
    ></Countdown>
    <div v-for="(item1, index) in questions" :key="item1.id">
      <h2>Question {{index+1}}: {{item1.question}}</h2>

      <b-form-group>
        <b-form-radio
          v-for="(item) in item1.answersById"
          :key="item.id"
          v-on:change="answer(item1.id, item.id)"
          v-model="selected"
          name="some-radios"
          :value="item.id"
        >{{item.answer}}</b-form-radio>
      </b-form-group>
    </div>
    <b-button type="submit" variant="primary" v-on:click="finished">Submit</b-button>
  </div>
</template>

<script>
import axios from "axios";
import Countdown from "countdown-vue";

export default {
  components: { Countdown },
  data() {
    return {
      nameCourses: null,
      questions: null,
      selected: null,
      data: []
    };
  },
  mounted() {
    axios
      .get("http://localhost:8082/cli/courses/" + this.$route.params.id)
      .then(response => {
        this.test = response.data;
        this.nameCourses = response.data.nameCourse;
        this.questions = response.data.questionsById;
        var i;
        for (i = 0; i < this.questions.length; i++) {
          this.data.push({ questionId: this.questions[i].id, answerId: null });
        }
        console.log(this.courses);
      });
  },
  methods: {
    answer(questionId, answerId) {
      console.log(questionId, answerId);
      var i;
      for (i = 0; i < this.data.length; i++) {
        if (this.data[i].questionId == questionId) {
          this.data[i].answerId = answerId;
        }
      }
    },

    finish() {
      console.log("finished");
    }
  }
};
</script>