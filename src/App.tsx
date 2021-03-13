import './App.css';
import BurnerCore from "@burner-wallet/core";
import InjectedSigner from "@burner-wallet/core/signers/InjectedSigner";
import {LocalSigner} from "@burner-wallet/core/signers";
import {InfuraGateway, XDaiGateway} from "@burner-wallet/core/gateways";
import { xdai, dai, eth, ERC20Asset } from '@burner-wallet/assets';
import ModernUI from "@burner-wallet/modern-ui";
import LinksPlugin from "./LinkPlugin";
// import LegacyPlugin from '@burner-wallet/legacy-plugin';

import React from 'react';
require('dotenv').config();

function App() {
  const jpyc = new ERC20Asset({
    id: 'JPYC',
    name: 'JPY Coin',
    network: '100',
    address: '0x417602f4fbdd471A431Ae29fB5fe0A681964C11b',
  });
  const hmty = new ERC20Asset({
    id: 'HMty',
    name: 'HMty',
    network: '100',
    address: '0xE2931876A8cD0bc76A7114CFaA8232eF983532a3',
  });

  const core = new BurnerCore({
    signers: [new LocalSigner()],
    gateways: [new InfuraGateway(process.env.REACT_APP_INFURA_KEY), new XDaiGateway()],
    assets: [hmty, jpyc, xdai, dai, eth],
  });

  return (
    <div className="App">
      <ModernUI
          core={core}
          plugins={[new LinksPlugin()]}
      />
    </div>
  );
}

export default App;
