import GameControl from "./Main"
import mapManager from "./configs/mapManager";
const dataManager = new mapManager();

const {regClass, property} = Laya;

@regClass()
export default class MainRT extends Laya.Scene {
	/**设置单例的引用方式，方便其他类引用 */
	public static instance: MainRT;
	/**当前游戏积分字段 */
	private _score: number;
	/**游戏控制脚本引用，避免每次获取组件带来不必要的性能开销 */
	private _control: GameControl;
	// declare owner : Laya.Sprite;
	
	constructor() {
		super();
		MainRT.instance = this;
	}
	
	public static getInstance(): MainRT{
		if(!MainRT.instance){
			MainRT.instance = new MainRT();
		}
		return MainRT.instance
	}
	
	/**
	 * 上个场景的参数
	 * @param params
	 */
	onOpened(params: any): void{
		if(params && params === "oldPlayer"){
			//重新加入游戏,重新绘制界面
			const roomInfo = dataManager.getData("roomInfo");
			const userInfo = dataManager.getData("userInfo");
			if(!roomInfo || !userInfo) return
			const playedCards = roomInfo[userInfo?.id].playedCards;
			this.readyGameStart();
			this.renderPlayedCards(null, userInfo?.id, playedCards)
		}
	}
	
	/**
	 * 有时候onEnable执行的太慢，长连接的回调先于onEnable执行，导致this._control还没初始化
	 */
	init(): void {
		this._control = this.getComponent(GameControl);
	}
	
	onEnable(): void {
		console.log("执行了onEnable")
		this._control = this.getComponent(GameControl);
	}
	
	startGame(): void{
		this._control.startGame()
	}
	
	/**
	 * 结束游戏
	 */
	stopGame(): void{
		this._control.stopGame()
	}
	
	/**
	 * 准备绘制游戏牌和人物
	 */
	readyGameStart(): void{
		this._control.readyGameStart()
	}
	
	/**
	 * 绘制打出去的牌
	 */
	renderPlayedCards(cardNum: number, playerId: string,roomInfo: any): void{
		this._control.renderPlayedCards(cardNum, playerId,roomInfo);
	}
	
	/**
	 * 绘制手牌
	 */
	renderHandCards(idx: number, handCards:any): void{
		this._control.renderHandCards(idx, handCards)
	}
	
	/**
	 * 服务器下发一张牌
	 */
	public deliverCard(cardNum: number, playerId: string){
		this._control.deliverCard(cardNum, playerId)
	}
	
	/**
	 * 绘制操作人指示图标
	 */
	renderTimeStatus(): void{
		this._control.renderTimeStatus()
	}
	
	/**
	 * 可以操作
	 */
	public checkOperate(operateType: string, playerId: string): void{
		this._control.checkOperate(operateType,playerId);
	}
	
	/**
	 * 胡牌结算
	 */
	public winning(result: any): void{
		this._control.winning(result);
	}
	
	/**
	 * 进入游戏场景
	 */
	enterGameScene() :void{
		Laya.Scene.open("Game.ls")
	}
}
