
import axios from 'axios'
import qs from 'qs'
axios.defaults.withCredentials = true

// export const getarchives = (json) => new axios.get("/api/archivesData");
const archivesData = [
  {
    "id": "12987120",
    "name": "好滋好味鸡蛋仔",
    "category":["江浙小吃、小吃零食"],
    "desc": "荷兰优质淡奶，奶香浓而不腻",
    "address": "上海市普陀区真北路",
    "groupNum": 4,
    "price": 5.11,
    "totalNum": 98,
    "groupPrice": 20
  },
  {
    "id": "12987121",
    "name": "好滋好味鸡蛋仔",
    "category":["江浙小吃、小吃零食"],
    "desc": "荷兰优质淡奶，奶香浓而不腻",
    "address": "上海市普陀区真北路",
    "groupNum": 4,
    "price": 5.11,
    "totalNum": 98,
    "groupPrice": 20
  },
  {
    "id": "12987122",
    "name": "好滋好味鸡蛋仔",
    "category":["江浙小吃、小吃零食"],
    "desc": "荷兰优质淡奶，奶香浓而不腻",
    "address": "上海市普陀区真北路",
    "groupNum": 4,
    "price": 5.11,
    "totalNum": 98,
    "groupPrice": 20
  },
  {
    "id": "12987123",
    "name": "好滋好味鸡蛋仔",
    "category":["江浙小吃、小吃零食"],
    "desc": "荷兰优质淡奶，奶香浓而不腻",
    "address": "上海市普陀区真北路",
    "groupNum": 4,
    "price": 5.11,
    "totalNum": 98,
    "groupPrice": 20
  },
  {
    "id": "12987124",
    "name": "好滋好味鸡蛋仔",
    "category":["江浙小吃、小吃零食"],
    "desc": "荷兰优质淡奶，奶香浓而不腻",
    "address": "上海市普陀区真北路",
    "groupNum": 4,
    "price": 5.11,
    "totalNum": 98,
    "groupPrice": 20
  },
  {
    "id": "12987125",
    "name": "好滋好味鸡蛋仔",
    "category":["江浙小吃、小吃零食"],
    "desc": "荷兰优质淡奶，奶香浓而不腻",
    "address": "上海市普陀区真北路",
    "groupNum": 4,
    "price": 5.11,
    "totalNum": 98,
    "groupPrice": 20
  },
  {
    "id": "12987126",
    "name": "好滋好味鸡蛋仔",
    "category":["江浙小吃、小吃零食"],
    "desc": "荷兰优质淡奶，奶香浓而不腻",
    "address": "上海市普陀区真北路",
    "groupNum": 4,
    "price": 5.11,
    "totalNum": 98,
    "groupPrice": 20
  },
  {
    "id": "12987127",
    "name": "好滋好味鸡蛋仔",
    "category":["江浙小吃、小吃零食"],
    "desc": "荷兰优质淡奶，奶香浓而不腻",
    "address": "上海市普陀区真北路",
    "groupNum": 4,
    "price": 5.11,
    "totalNum": 98,
    "groupPrice": 20
  },
  {
    "id": "12987128",
    "name": "好滋好味鸡蛋仔",
    "category":["江浙小吃、小吃零食"],
    "desc": "荷兰优质淡奶，奶香浓而不腻",
    "address": "上海市普陀区真北路",
    "groupNum": 4,
    "price": 5.11,
    "totalNum": 98,
    "groupPrice": 20
  },
  {
    "id": "12987129",
    "name": "好滋好味鸡蛋仔",
    "category":["江浙小吃、小吃零食"],
    "desc": "荷兰优质淡奶，奶香浓而不腻",
    "address": "上海市普陀区真北路",
    "groupNum": 4,
    "price": 5.11,
    "totalNum": 98,
    "groupPrice": 20
  },
  {
    "id": "12987130",
    "name": "好滋好味鸡蛋仔",
    "category":["江浙小吃、小吃零食"],
    "desc": "荷兰优质淡奶，奶香浓而不腻",
    "address": "上海市普陀区真北路",
    "groupNum": 4,
    "price": 5.11,
    "totalNum": 98,
    "groupPrice": 20
  }
]
export const getarchives = (json) => {
	return archivesData
};
