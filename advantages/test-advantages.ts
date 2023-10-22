// Запрос в виде платежа
// {
// 	"sum": 10000,
// 	"from": 2,
// 	"to": 4
// }
// Ответ
// {
// 	"status": "success",
// 	"data": {
// 		"databaseId": 567,
// 		"sum": 10000,
// 		"from": 2,
// 		"to": 4
// 	}
// },
// {
// 	"status": "failed",
// 	"data": {
// 		"errorMessage": "Недостаточно средств",
// 		"errorCode": 4
// 	}
// }

enum StatusRequest {
  SUCCESS = "success",
  FAILED = "failed",
}

interface ReqData {
  sum: number;
  from: number;
  to: number;
}

interface IDataSuccess extends ReqData {
  databaseId: number;
}

interface IDataFailed {
  errorMessage: string;
  errorCode: number;
}

interface IResponseSuccess {
  status: StatusRequest.SUCCESS;
  data: IDataSuccess;
}

interface IResponseFailed {
  status: StatusRequest.FAILED;
  data: IDataFailed;
}

function getSum(req: ReqData): IResponseSuccess | IResponseFailed {
  return {
    status: StatusRequest.SUCCESS,
    data: {
      databaseId: 567,
      sum: req.sum,
      from: req.from,
      to: req.to,
    },
  };
}

type Res = IResponseSuccess | IResponseFailed;

// Пишем typeGuard для статуса ответа
function successGuard(req: Res): req is IResponseSuccess {
  if (req.status === StatusRequest.SUCCESS) {
    return true;
  }
  return false;
}

function isSuccess(req: Res): number {
  if (successGuard(req)) {
    return req.data.databaseId;
  } else {
    throw Error(req.data.errorMessage);
  }
}
