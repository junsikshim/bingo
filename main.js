const keywords = [
  '코딩',
  '알고리즘',
  '조건문',
  '스크래치',
  '대쉬',
  '순서도',
  '명령어',
  '로봇',
  '센서',
  '반복문',
  '변수',
  '동작',
  '형태',
  '이벤트',
  '제어',
  '인공지능',
  '좌표',
  '방향',
  '기린',
  '엔트리',
  '배경',
  '순차',
  '핵심요소',
  '픽셀',
  '비트',
  '버그',
  '디버깅',
  '시나리오',
  '패턴',
  '프로그램',
  '규칙'
];

const generateCells = keywords => size => {
  const cells = [];

  for (let y = 1; y <= 5; y++) {
    for (let x = 1; x <= 5; x++) {
      if (x === Math.ceil(size / 2) && y === Math.ceil(size / 2))
        continue;

      const elem = document.createElement('div');
      elem.classList.add('cell', `cell_${y}_${x}`);
      elem.innerHTML = getRandomKeyword(keywords);
      cells.push(elem);
    }
  }

  return cells;
};

const getRandomKeyword = keywords => {
  const i = Math.floor(Math.random() * keywords.length);
  return keywords.splice(i, 1);
};

document.addEventListener('DOMContentLoaded', e => {
  const grid = document.querySelector('#grid');
  const cells = generateCells(keywords)(5);

  cells.forEach(c => grid.appendChild(c));
});