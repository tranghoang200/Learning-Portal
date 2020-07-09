<template>
  <div>
    <h1>{{nameCourses}}</h1>
    <b-form @submit="onSubmit" @reset="onReset">
      <b-form-group id="numQues" label="Number of Questions:" label-for="NumQuestion">
        <b-form-select id="NumQuestion" v-model="numQuestion" :options="optionsQuestion" required></b-form-select>
      </b-form-group>

      <b-form-group id="numLevel" label="Level: " label-for="level">
        <b-form-select id="level" v-model="numLevel" :options="optionsLevel" required></b-form-select>
      </b-form-group>

      <b-button type="submit" variant="primary">Submit</b-button>
      <b-button type="reset" variant="danger">Reset</b-button>
    </b-form>
  </div>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return { nameCourses: null, numQuestion: null, numLevel: null,
    optionsQuestion: [
          { value: null, text: 'Please select number of question' },
          { value: '5', text: '5' },
          { value: '10', text: '10' },
          { value: '15', text: '15' },
          { value: '20', text: '20' }
        ],
    optionsLevel: [
          { value: null, text: 'Please select Level' },
          { value: '1', text: '1' },
          { value: '2', text: '2' },
          { value: '3', text: '3' },
          { value: '4', text: '4' }
        ],
    };
  },
  mounted() {
    axios
      .get("http://localhost:8082/cli/courses/" + this.$route.params.id)
      .then(response => {
        this.nameCourses = response.data.nameCourse;
      });
  },
};
