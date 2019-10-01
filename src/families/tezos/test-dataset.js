// @flow
import type { DatasetTest } from "../dataset";

const networkInfo = {
  family: "tezos",
  fees: "1420"
};

const dataset: DatasetTest = {
  implementations: ["libcore"],
  currencies: {
    tezos: {
      accounts: [
        {
          transactions: [
            {
              name: "success1",
              transaction: {
                amount: "1000000",
                recipient: "tz1bd2A1bdafn7kKTNFd8gPjnFiEWJUsVB39",
                useAllAmount: false,
                family: "tezos",
                type: 8,
                networkInfo,
                fees: "1420",
                gasLimit: "10300",
                storageLimit: "300"
              },
              expectedStatus: {
                transactionError: null,
                recipientError: null,
                recipientWarning: null,
                showFeeWarning: true,
                estimatedFees: "14626000",
                amount: "1000000",
                totalSpent: "15626000",
                useAllAmount: false,
                recipientIsReadOnly: false
              }
            }
          ],
          raw: {
            id:
              "libcore:1:tezos:xpub661MyMwAqRbcGJRaWpV3ooVkBC232h197qBQtdshZA5L7H24SXJZWepnJpyzHrXYeisTjz9MAFab7UTyapUWziCZJku6Ym7p4RTbHYPMLwN:tezbox",
            seedIdentifier:
              "02706dbe651d40b272e6bfe66d1ff466b490e262c223f48bd140b95898adce8965",
            name: "Tezos 1 (tezbox)",
            derivationMode: "tezbox",
            index: 0,
            freshAddress: "tz1TeawWFnUmeP1qQLf4JWe5D7LaNp1qxgMW",
            freshAddressPath: "44'/1729'/0'/0'",
            freshAddresses: [
              {
                address: "tz1TeawWFnUmeP1qQLf4JWe5D7LaNp1qxgMW",
                derivationPath: "44'/1729'/0'/0'"
              }
            ],
            blockHeight: 623107,
            operations: [],
            pendingOperations: [],
            currencyId: "tezos",
            unitMagnitude: 6,
            lastSyncDate: "2019-09-25T13:28:07.470Z",
            balance: "43788260",
            xpub:
              "xpub661MyMwAqRbcGJRaWpV3ooVkBC232h197qBQtdshZA5L7H24SXJZWepnJpyzHrXYeisTjz9MAFab7UTyapUWziCZJku6Ym7p4RTbHYPMLwN",
            subAccounts: []
          }
        }
      ]
    }
  }
};

export default dataset;