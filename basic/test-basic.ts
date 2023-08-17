// типизация объекта
const info: {
  officeId: number;
  isOpened: boolean;
  contacts: {
    phone: string;
    email: string;
    address: {
      city: string;
    };
  };
} = {
  officeId: 45,
  isOpened: false,
  contacts: {
    phone: "050-555-55",
    email: "XXXXXXXXXXXXXXXX",
    address: {
      city: "Minsk",
    },
  },
};

// Типизация функции

// Было

/* Запрос */
// {
// 	"topicId": 5,
// 	"status": "published" // "draft", "deleted"
// }
/* Ответ */
// [
// 	{
// 		"question": "Как осуществляется доставка?",
// 		"answer": "быстро!",
// 		"tags": [
// 			"popular",
// 			"new"
// 		],
// 		"likes": 3,
// 		"status": "published"
// 	}
// ]

enum StatusName {
  PUBLISHED = "published",
  DRAFT = "draft",
  DELETED = "deleted",
}

// Тут в аргументе статус опционален и поэтому знак ?

async function getFaqs(req: { topicId: number; status?: StatusName }): Promise<
  {
    question: string;
    answer: string;
    tags: string[];
    likes: number;
    status: StatusName;
  }[]
> {
  const res = await fetch("/faqs", {
    method: "POST",
    body: JSON.stringify(req),
  });
  const data = await res.json();
  return data;
}
