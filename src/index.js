import { sum } from "./sum";
import './index.scss';

const result = sum(1, 3);
console.log(result);

async function check() {
  await fetch('https://google.com');
}

check().then(() => {
  console.log('success');
}).catch(() => {
  console.log('error')
})
