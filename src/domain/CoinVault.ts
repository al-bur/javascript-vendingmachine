import {
  COIN_VAULT_CONDITION,
  COIN_CONDITION,
  COINS_PRICE_TABLE,
  COINS_INIT_QUANTITY,
  CHEAPEST_COIN,
} from '../utils/constants';
import { Coins } from '../utils/interface';
import { getRandomNumZeroToMax } from '../utils/domain.utils';

export class CoinVault {
  private coinsQuantity: Coins;

  constructor() {
    this.coinsQuantity = { ...COINS_INIT_QUANTITY };
  }

  getCoins(): Coins {
    return this.coinsQuantity;
  }

  addCoins(coins: Coins) {
    [...Object.entries(coins)].forEach(([key, value]) => {
      this.coinsQuantity[key] += value;
    });
  }

  getBalance() {
    return [...Object.entries(this.coinsQuantity)].reduce(
      (previous, [key, value]) => previous + COINS_PRICE_TABLE[key] * value,
      0
    );
  }

  chargeMoney(money: number) {
    try {
      this.validateMoney(money);
      this.addCoins(this.generateRandomCoins(money));
    } catch (err) {
      throw err;
    }
  }

  validateMoney(money: number) {
    if (money + this.getBalance() > COIN_VAULT_CONDITION.MAX_BALANCE) {
      throw new Error('돈통이 가득찼어요! 100,000원 까지만 보관 가능합니다.');
    }
    if (money % COIN_CONDITION.UNIT_PRICE !== 0) {
      throw new Error('상평통보는 안 받습니다. 10원단위로 넣어주세요!');
    }
  }

  generateRandomCoins(money: number): Coins {
    let balance = money;
    const generatedCoins = { ...COINS_INIT_QUANTITY };

    [...Object.entries(COINS_PRICE_TABLE)].forEach(([key, price]) => {
      const maxQuotient = balance / price;

      if (price === CHEAPEST_COIN) {
        generatedCoins[key] = maxQuotient;

        return;
      }
      const randomQuantity = getRandomNumZeroToMax(maxQuotient);
      balance -= price * randomQuantity;
      generatedCoins[key] = randomQuantity;
    });

    return generatedCoins;
  }
}
