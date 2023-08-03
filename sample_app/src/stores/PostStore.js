import { defineStore } from "pinia";

export const UsePostStore = defineStore("postStore", {
  state: () => ({
    Posts: [
      {
        id: 1,
        description:
          "Team sport played with a ball, aiming to score in the opponent's net within 90 minutes.",
        title: "Soccer",
        img: "@/assets/fb.jpg",
        isFav: true,
      },
      {
        id: 2,
        description:
          "Fast-paced game where players shoot balls into hoops, trying to outscore opponents within regulation time.",
        title: "Basketball",
        img: "@/assets/bb.jpg",
        isFav: false,
      },
      {
        id: 3,
        description:
          "Individual or doubles sport played with rackets and a ball, aiming to win points and sets.",
        title: "Tennis",
        img: "@/assets/tns.jpg",
        isFav: true,
      },
      {
        id: 4,
        description:
          "Riding bicycles for recreation, competition, or transport, often involving various terrains and distances.",
        title: "Cycling",
        img: "@/assets/cyc.jpg",
        isFav: false,
      },
    ],
  }),
  getters: {
    favs() {
      return this.Posts.filter((t) => t.isFav);
    },
    favCount() {
      return this.Posts.reduce((p, c) => {
        return c.isFav ? p + 1 : p;
      }, 0);
    },
    totalCount() {
      return this.Posts.length;
    },
  },
  actions: {
    deleteTask(id) {
      this.Posts = this.Posts.filter((t) => {
        return t.id !== id;
      });
    },
    toggleFav(id) {
      const post = this.Posts.find((t) => t.id === id);
      post.isFav = !post.isFav;
    },
  },
});
