import { createRouter, createWebHistory } from 'vue-router'
import MyData from "../components/my-data.vue"
import OnEvent from "../components/on-event.vue"
import MyTest from "../components/mytest/my-test.vue"
import MyPhotodetail from "../components/mytest/my-photodetal.vue"
import MyParent from "../components/props-emit/my-parent.vue"

const routes = [
  {
    path: "/",
    name: "index",
    component: MyTest
  },
  {
    path: "/mydata",
    name: "mydata",
    component: MyData
  },
  {
    path: "/onevent",
    name: "onevent",
    component: OnEvent
  },
  {
    path: "/photodetail/:parentId",
    name: "photodetail",
    props: true,
    component: MyPhotodetail
  },
  {
    path: "/myparent",
    component: MyParent
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes
})

export default router
