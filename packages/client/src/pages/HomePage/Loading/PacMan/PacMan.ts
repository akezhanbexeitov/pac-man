import {pacManMatrix} from "@/pages/HomePage/Loading/pacManMatrix";
import {
  MOUTH_SPEED,
  PAC_MAN_HEIGHT_IN_PX,
  PAC_MAN_WIDTH_IN_PX,
  PIXEL_SIZE, POINTS_COUNT,
  POINTS_SCREEN_WIDTH
} from "@/pages/HomePage/Loading/PacMan/constants";

export class PacMan {
  readonly context: CanvasRenderingContext2D;
  private index: number;
  private pointX: number;
  constructor(context: CanvasRenderingContext2D) {
    this.context = context;
    this.index = 0;
    this.pointX = 0;
  }

  private drawPixel = (x: number, y: number) => {
    this.context.fillRect(x, y, PIXEL_SIZE, PIXEL_SIZE);
  }

  private drawFrame = (matrix: Array<Array<number>>) => {
    this.context.fillStyle = '#FFD301';
    this.context.clearRect(0, 0, PAC_MAN_WIDTH_IN_PX, PAC_MAN_HEIGHT_IN_PX);
    for (let i = 0; i < matrix.length; i++) {
      for(let j = 0; j < matrix[i].length; j++) {
        if(matrix[i][j]){
          this.drawPixel(j*PIXEL_SIZE, i*PIXEL_SIZE);
        }
      }
    }
  }

  private drawPoint = (x: number, y: number) => {
    this.context.beginPath();
    this.context.arc(x, y, PIXEL_SIZE, 0, 2*Math.PI, true);
    this.context.fill();
    this.context.closePath();
  }

  private startPacAnimate = () => {
    if(!this.context) return;
    this.drawFrame(pacManMatrix[this.index]);
    setTimeout(() => {
      this.index = (this.index + 1) % pacManMatrix.length
      requestAnimationFrame(this.startPacAnimate);
    }, 1000 / MOUTH_SPEED);
  }

  private startPointsAnimate = () => {
    if(!this.context) return;
    this.context.clearRect(PAC_MAN_WIDTH_IN_PX, 0, POINTS_SCREEN_WIDTH, PAC_MAN_HEIGHT_IN_PX);
    for(let i = 0; i < POINTS_COUNT; i++) {
      const leftPointX = POINTS_SCREEN_WIDTH - i*PAC_MAN_WIDTH_IN_PX + this.pointX;
      if(leftPointX > PAC_MAN_WIDTH_IN_PX) {
        this.drawPoint(leftPointX, PAC_MAN_HEIGHT_IN_PX/2);
      }
    }
    this.pointX -= 1;
    if(this.pointX < -PAC_MAN_WIDTH_IN_PX) {
      this.pointX = 0;
    }
    requestAnimationFrame(this.startPointsAnimate);
  }

  public start(){
    this.startPacAnimate();
    this.startPointsAnimate();
  }
}
