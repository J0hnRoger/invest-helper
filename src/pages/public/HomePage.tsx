import * as React from 'react';
import { RouteComponentProps } from 'react-router-dom';

import Bilan from '../../features/Bilan/components/Bilan';
import Box from 'grommet/components/Box';

export default class HomePage extends React.Component<RouteComponentProps<{}>, {}> {
    public render() {
        return  <Box>
              <h4>Mon porte-feuille</h4>
              <Bilan />
        </Box>;
    }
}
