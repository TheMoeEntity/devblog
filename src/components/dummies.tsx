import { Post, User } from "./types";

export const PostDummy: Post[] = [
  {
    id: "1",
    title: "Neon Lights around the city of New York",
    date: "December 15, 2023",
    author: "Anthony Ezeh",
    views: 422,
    caption: "Jesus Is King",
    comments: [
      {
        id: "iwnownewencw",
        username: "alice simon",
        comment: "Nice topic!",
        date: "december 25, 2023 at 10:50AM",
      },
      {
        id: "gonerrer",
        username: "jane doe",
        comment: "I like the pictures!",
        date: "december 25, 2023 at 10:50AM",
      },
      {
        id: "iwnownewencw",
        username: "anthony caron",
        comment: "It is sooo realistic ",
        date: "december 25, 2023 at 10:50AM",
      },
      {
        id: "iwnownewencw",
        username: "moses nwigberi",
        comment: "I want these for myself",
        date: "december 25, 2023 at 10:50AM",
      },
    ],
    categories: ["Action", "Gaming"],
    image: ["/neon.jpg", "/assasin.jpg", "/moonlight.jpg", "/port.jpg"],
    paragraph: [
      {
        image: "",
        text: "Aliquam erat volutpat. Etiam vitae tortor. Morbi vestibulum volutpat enim. Aliquam eu nunc. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Nulla porta dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero. Cras varius.",
        caption:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        moreText:
          "Nam at tortor in tellus interdum sagittis. Aliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Test. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
      },

      {
        image: "/assasin.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        caption:
          "montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla ",
        moreText:
          "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. My query. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
      },
    ],
    tags: ["horizontal-image", "iframe", "relaxation", "video", "venmo"],
  },
  {
    id: "2",
    title: "Living a Simple and Authentic Life",
    date: "December 15, 2023",
    author: "Anthony Ezeh",
    views: 422,
    caption: "Jesus Is King",
    comments: [
      {
        id: "iwnownewencw",
        username: "alice simon",
        comment: "Nice topic!",
        date: "december 25, 2023 at 10:50AM",
      },
      {
        id: "gonerrer",
        username: "jane doe",
        comment: "I like the pictures!",
        date: "december 25, 2023 at 10:50AM",
      },
      {
        id: "iwnownewencw",
        username: "anthony caron",
        comment: "It is sooo realistic ",
        date: "december 25, 2023 at 10:50AM",
      },
      {
        id: "iwnownewencw",
        username: "moses nwigberi",
        comment: "I want these for myself",
        date: "december 25, 2023 at 10:50AM",
      },
    ],
    categories: ["Action", "Gaming"],
    image: ["/assasin.jpg", "/moonlight.jpg", "/port.jpg", "/neon.jpg"],
    paragraph: [
      {
        image: "",
        text: "Aliquam erat volutpat. Etiam vitae tortor. Morbi vestibulum volutpat enim. Aliquam eu nunc. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Nulla porta dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero. Cras varius.",
        caption:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        moreText:
          "Nam at tortor in tellus interdum sagittis. Aliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Test. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
      },

      {
        image: "/assasin.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        caption: "",
        moreText:
          "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. My query. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
      },
    ],
    tags: ["horizontal-image", "iframe", "relaxation", "video", "venmo"],
  },
  {
    id: "3",
    title: "Slowing down is an act of minimalism ",
    date: "December 15, 2023",
    author: "Anthony Ezeh",
    views: 422,
    caption: "Jesus Is King",
    comments: [
      {
        id: "iwnownewencw",
        username: "alice simon",
        comment: "Nice topic!",
        date: "december 25, 2023 at 10:50AM",
      },
      {
        id: "gonerrer",
        username: "jane doe",
        comment: "I like the pictures!",
        date: "december 25, 2023 at 10:50AM",
      },
      {
        id: "iwnownewencw",
        username: "anthony caron",
        comment: "It is sooo realistic ",
        date: "december 25, 2023 at 10:50AM",
      },
      {
        id: "iwnownewencw",
        username: "moses nwigberi",
        comment: "I want these for myself",
        date: "december 25, 2023 at 10:50AM",
      },
    ],
    categories: ["Action", "Gaming"],
    image: ["/moonlight.jpg", "/port.jpg", "/neon.jpg", "/assasin.jpg"],
    paragraph: [
      {
        image: "",
        text: "Aliquam erat volutpat. Etiam vitae tortor. Morbi vestibulum volutpat enim. Aliquam eu nunc. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Nulla porta dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero. Cras varius.",
        caption:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        moreText:
          "Nam at tortor in tellus interdum sagittis. Aliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Test. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
      },

      {
        image: "/assasin.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        caption: "Jesus is King",
        moreText:
          "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. My query. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
      },
    ],
    tags: ["horizontal-image", "iframe", "relaxation", "video", "venmo"],
  },
  {
    id: "4",
    title: "What to do if there is no inspiration",
    date: "December 15, 2023",
    author: "Anthony Ezeh",
    views: 422,
    caption: "Jesus Is King",
    comments: [
      {
        id: "iwnownewencw",
        username: "alice simon",
        comment: "Nice topic!",
        date: "december 25, 2023 at 10:50AM",
      },
      {
        id: "gonerrer",
        username: "jane doe",
        comment: "I like the pictures!",
        date: "december 25, 2023 at 10:50AM",
      },
      {
        id: "iwnownewencw",
        username: "anthony caron",
        comment: "It is sooo realistic ",
        date: "december 25, 2023 at 10:50AM",
      },
      {
        id: "iwnownewencw",
        username: "moses nwigberi",
        comment: "I want these for myself",
        date: "december 25, 2023 at 10:50AM",
      },
    ],
    categories: ["Action", "Gaming"],
    image: ["/neon.jpg", "/assasin.jpg", "/moonlight.jpg", "/port.jpg"],
    paragraph: [
      {
        image: "",
        text: "Aliquam erat volutpat. Etiam vitae tortor. Morbi vestibulum volutpat enim. Aliquam eu nunc. Nunc sed turpis. Sed mollis, eros et ultrices tempus, mauris ipsum aliquam libero, non adipiscing dolor urna a orci. Nulla porta dolor. Class aptent taciti sociosqu ad litora torquent per conubia nostra, per inceptos hymenaeos. Pellentesque dapibus hendrerit tortor. Praesent egestas tristique nibh. Sed a libero. Cras varius.",
        caption:
          "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus.",
        moreText:
          "Nam at tortor in tellus interdum sagittis. Aliquam lobortis. Donec orci lectus, aliquam ut, faucibus non, euismod id, nulla. Curabitur blandit mollis lacus. Nam adipiscing. Vestibulum eu odio. Vivamus laoreet. Nullam tincidunt adipiscing enim. Phasellus tempus. Test. Proin viverra, ligula sit amet ultrices semper, ligula arcu tristique sapien, a accumsan nisi mauris ac eros. Fusce neque. Suspendisse faucibus, nunc et pellentesque egestas, lacus ante convallis tellus, vitae iaculis lacus elit id tortor.",
      },

      {
        image: "/assasin.jpg",
        text: "Lorem ipsum dolor sit amet, consectetuer adipiscing elit. Aenean commodo ligula eget dolor. Aenean massa. Cum sociis natoque penatibus et magnis dis parturient montes, nascetur ridiculus mus. Donec quam felis, ultricies nec, pellentesque eu, pretium quis, sem. Nulla consequat massa quis enim. Donec pede justo, fringilla vel, aliquet nec, vulputate eget, arcu. In enim justo, rhoncus ut, imperdiet a, venenatis vitae, justo.",
        caption: "",
        moreText:
          "Etiam ultricies nisi vel augue. Curabitur ullamcorper ultricies nisi. Nam eget dui. Etiam rhoncus. Maecenas tempus, tellus eget condimentum rhoncus, sem quam semper libero, sit amet adipiscing sem neque sed ipsum. Nam quam nunc, blandit vel, luctus pulvinar, hendrerit id, lorem. My query. Maecenas nec odio et ante tincidunt tempus. Donec vitae sapien ut libero venenatis faucibus. Nullam quis ante.",
      },
    ],
    tags: ["horizontal-image", "iframe", "relaxation", "video", "venmo"],
  },
];

export const userDummy: User[] = [
  {
    id: "0440ff0ff0d0ff",
    username: "Nazville",
    firstname: "Anthony",
    lastname: "Ezeh",
    bio: "Apple bear",
    dob: "26 11 2000",
    editor: true,
    email: "nazbrew@gmail.com",
    password: "thisisthesaltvalue2j2j22",
    photo: "thisisit"

  },
  {
    id: "044022320ff0d0ff",
    username: "Leroy",
    firstname: "David",
    lastname: "Udo",
    bio: "They call me Roy, but you can call me anytime",
    dob: "22 3 2000",
    editor: false,
    email: "davidedo @gmail.com",
    password: "thisisthesaltvalue2j2j22",
    photo: "thisisit"

  },
];
