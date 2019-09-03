// import Axios from "axios";
const list = [
  {
    "id": 1,
    "video": {
      "id": "wd0ejVP_g78",
      "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    },
    "view": 812727,
    "like": 6243,
    "dislikes": 324,
    "comments": 100,
    "published": 1566242932132
  },
  {
    "id": 2,
    "video": {
      "id": "jaVNP3nIAv0",
      "desc": "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure, but because those who do not know how to pursue pleasure rationally encounter consequences that are extremely painful. Nor again is there anyone who loves or pursues or desires to obtain pain of itself, because it is pain, but because occasionally circumstances occur in which toil and pain can procure him some great pleasure. To take a trivial example, which of us ever undertakes laborious physical exercise, except to obtain some advantage from it? But who has any right to find fault with a man who chooses to enjoy a pleasure that has no annoying consequences, or one who avoids a pain that produces no resultant pleasure?"
    },
    "view": 187387,
    "like": 143,
    "dislikes": 323,
    "comments": 200,
    "published": 1511231232132
  },
  {
    "id": 3,
    "video": {
      "id": "er7HKzWY9Rw",
      "desc": "At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat."
    },
    "view": 48787,
    "like": 443,
    "dislikes": 324,
    "comments": 30,
    "published": 1364231232132
  }
];

const add = {
  "video": {
    "id": "HUAyBKQt3lI",
    "desc": "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
  },
  "view": 123,
  "like": 12,
  "dislikes": 1,
  "comments": 10,
  "published": 1566242942132
};


export default {
  loadList() {
    return new Promise(resolve => setTimeout(resolve, 1000, list)); // sleep for display loading
    // git hub pages doesn't support this way to mock
    // return Axios.get('/mock/list.json').then(response => response.data);
  },
  removeFomList(ids) {
    return new Promise(resolve => setTimeout(resolve, 1000, ids)); // request mock
  },
  addToList() {
    return new Promise(resolve => setTimeout(resolve, 1000, add)); // sleep for display loading
    // git hub pages doesn't support this way to mock
    // return Axios.get('/mock/add_list.json').then(response => response.data);
  }
}