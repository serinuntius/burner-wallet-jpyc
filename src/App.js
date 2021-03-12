import './App.css';
import BurnerCore from "@burner-wallet/core";
import InjectedSigner from "@burner-wallet/core/signers/InjectedSigner";
import {LocalSigner} from "@burner-wallet/core/signers";
import {InfuraGateway, XDaiGateway} from "@burner-wallet/core/gateways";
import { xdai, dai, eth, ERC20Asset } from '@burner-wallet/assets';
import ModernUI from "@burner-wallet/modern-ui";
require('dotenv').config();

function App() {
  const bos = new ERC20Asset({
    id: 'JPYC',
    name: 'JPY Coin',
    network: '100',
    address: '0x417602f4fbdd471A431Ae29fB5fe0A681964C11b',
  });
  const core = new BurnerCore({
    signers: [new InjectedSigner(), new LocalSigner()],
    gateways: [new InfuraGateway(process.env.REACT_APP_INFURA_KEY), new XDaiGateway()],
    assets: [xdai, dai, eth, bos],
  });

  return (
    <div className="App">
      <ModernUI
          core={core}
      />
    </div>
  );
}

export default App;
