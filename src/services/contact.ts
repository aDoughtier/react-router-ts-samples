import { sleep } from '@/config/utils'
let data = []
const getContacts = async () => {
  await sleep(1);
  console.log('loader')
  return {
    message: "success",
    code: 200,
    data: [
      {
        id: "dhus-jsdo",
        first: "xie",
        last: "kai",
        favorite: true,
      },
      {
        id: "sdcjis-snask",
        first: "jj",
        last: "ww",
        favorite: false,
      }
    ]
  }
  // return new Promise((resolve, reject) => {
  //   fetch("/contact/data")
  //     .then(res => res.json())
  //     .then(res => {
  //       resolve(res)
  //     })
  //     .catch(err => reject(err))
  // })
}

const createContact = async () => {
  await sleep(1);
  console.log('action')
  return {
    message: "success",
    code: 200,
  }
}

const getList = async () => {
  await sleep(1);
  console.log('getListLoader')
  return {
    message: "success",
    code: 200,
    data: [
      {
        id: "dhus-jsdo",
        first: "xie",
        last: "kai",
        favorite: true,
      },
      {
        id: "sdcjis-snask",
        first: "jj",
        last: "ww",
        favorite: false,
      }
    ]
  }
  // return new Promise((resolve, reject) => {
  //   fetch("/contact/data")
  //     .then(res => res.json())
  //     .then(res => {
  //       resolve(res)
  //     })
  //     .catch(err => reject(err))
  // })
}

const createList = async () => {
  await sleep(1);
  console.log('createListAction')
  return {
    message: "success",
    code: 200,
  }
}


export default {
  getContacts,
  createContact,
  createList,
  getList
}