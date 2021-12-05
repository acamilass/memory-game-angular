import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-memory-game',
  templateUrl: './memory-game.component.html',
  styleUrls: ['./memory-game.component.scss']
})
export class MemoryGameComponent implements OnInit {

  cardsImages = [
    'assets/natal/1.png',
    'assets/natal/2.png',
    'assets/natal/3.png',
    'assets/natal/4.png',
    'assets/natal/5.png',
    'assets/natal/6.png',
  ];

  cardsArr: any;

  constructor() { }

  ngOnInit(): void {
    this.cardsArr = this.createNewArray(2);
  }

  shuffle(newArray: Array<string>): Array<string> {
    let currentIndex = newArray.length;
    let temporaryValue;
    let randomIndex;

    while (0 !== currentIndex) {
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;
      temporaryValue = newArray[currentIndex];
      newArray[currentIndex] = newArray[randomIndex];
      newArray[randomIndex] = temporaryValue;
    }

    return newArray;
  }

  selectLevel(type: string) {

    if (type === 'easy') {
      this.cardsArr = this.createNewArray(2);
    } else if (type === 'medium') {
      this.cardsArr = this.createNewArray(4);
    } else if (type === 'hard') {
      this.cardsArr = this.createNewArray(6);
    }

  }

  createNewArray(lengthArray: number) {

    let newArray = [];
    const arr = this.shuffle(this.cardsImages);

    for (var i = 0; i < lengthArray; i++) {
      newArray.push(arr[i], arr[i]);
    }

    return this.shuffle(newArray);
  }

  flipCard() {
    console.log('Flip card');
    document.getElementById('game__card--front').style.transform = 'rotateY(-180deg)';
    document.getElementById('game__card--back').style.transform = 'rotateY(0deg)';
  }

}
