// @flow

import { BigNumber } from "bignumber.js";
import type { Exchange, ExchangeRate, GetProviders} from "./types";
import type { Transaction } from "../generated/types";

export const mockedGetExchangeRates = async (exchange: Exchange) => {
  const { fromAmount } = exchange;
  if (fromAmount.isLessThanOrEqualTo(10)) {
    //Fake delay to show loading UI
    await new Promise(r => setTimeout(r, 800));
    //Mock OK
    return [
      {
        rate: BigNumber("0.5"),
        rateId: "mockedRateId",
        provider: "changelly",
        expirationDate: new Date()
      }
    ];
  } else {
    //Mock KO
    throw new Error(
      `getExchangeRate: Rate available for amounts between 1 and 10`
    );
  }
};

export const mockedInitSwap = async (
  exchange: Exchange, // eslint-disable-line no-unused-vars
  exchangeRate: ExchangeRate, // eslint-disable-line no-unused-vars
  deviceId: string // eslint-disable-line no-unused-vars
): Promise<{
  transaction: Transaction,
  swapId: string
}> => {
  const transaction = {
    family: "bitcoin",
    amount: BigNumber(0),
    recipient: "some_address",
    feePerByte: BigNumber(10),
    networkInfo: null,
    useAllAmount: false
  };

  return {
    transaction,
    swapId: "mockedSwapId"
  };
};

export const mockedGetProviders: GetProviders = async () => {
  //Fake delay to show loading UI
  await new Promise(r => setTimeout(r, 800));

  return [
    {
      provider: "changelly",
      supportedCurrencies: ["BTC", "LTC", "ETH"]
    }
  ];
};
