import { createWebHistory, createRouter } from "vue-router"; // vue-router 라이브러리를 import 한다
import List from "@/components/List.vue";
import Home from "@/components/Home.vue";
import Detail from "@/components/Detail.vue";
import NotFound from "@/components/NotFound.vue";
import Author from "@/components/Author.vue";
import Comment from "@/components/Comment.vue";

const routes = [
  {
    path: "/",
    component: Home
  },
  {
    path: "/list",
    component: List,
    beforeEnter: (to, from) => {
      // navigation guards, 라우팅 전 실행되는 코드
      console.log('[router.js] beforeEnter ::');
      console.log(' to >', to);
      console.log(' from > ', from);
    }
  },
  {
    path: "/detail/:id(\\d+)",
    component: Detail,
    children: [
      {
        path: "author",
        component: Author,
      },
      {
        path: "comment",
        component: Comment,
      }
    ]
  },
  // 위 path 를 제외한 path 로 접근 시 404 페이지 노출
  {
    path: "/:anything(.*)", // 아무 문자 입력 가능, 엄격하게 검사하고 싶으면(.*) 추가
    component: NotFound, // 404 페이지 컴포넌트
  }
];

const router = createRouter({
  history: createWebHistory(),
  routes,
});
// 모든 routed에 같은 navigation guard 를 추가하고 싶을 때
// 라우팅 전 실행 : beforeEach() 혹은 beforeResolve()
// 라우팅 후 실행 : afterEach()
router.beforeEach((to, from) => {
  console.log('[router.js] beforeEach ::');
  console.log(' to > ', to);
  console.log(' from > ', from)
})

export default router;