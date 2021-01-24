import React from 'react';
import { WindowDimensionsProvider } from './src/hooks/window-size';
import "fontsource-roboto-mono";
import "fontsource-roboto-mono/500.css";
import "prism-themes/themes/prism-atom-dark.css";
import "prismjs/plugins/line-numbers/prism-line-numbers.css";

export const onServiceWorkerUpdateReady = () => {
    const answer = window.confirm('This application has been updated. Reload to display the latest version?');

    if (answer) {
        window.location.reload();
    }
};

const RootElement = ({ element }) => <WindowDimensionsProvider>{element}</WindowDimensionsProvider>;

export const wrapRootElement = RootElement;
