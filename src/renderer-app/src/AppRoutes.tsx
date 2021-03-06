import * as React from "react";
import { HashRouter } from "react-router-dom";
import { Route, Switch } from "react-router";
import { message } from "antd";
import WhiteboardCreatorPage from "./WhiteboardCreatorPage";
import IndexPage from "./IndexPage";
import WhiteboardPage from "./WhiteboardPage";
import ReplayPage from "./ReplayPage";
import JoinPage from "./JoinPage";
import AddNamePage from "./AddNamePage";
import Test from "./Test";
import Storage from "./Storage";
import HistoryPage from "./HistoryPage";
import CreatePage from "./CreatePage";
export class AppRoutes extends React.Component<{}, {}> {
    public componentDidCatch(error: any): void {
        message.error(`网页加载发生错误：${error}`);
    }
    public render(): React.ReactNode {
        return (
            <HashRouter>
                <Switch>
                    <Route path="/replay/:identity/:uuid/:userId/" component={ReplayPage} />
                    <Route path="/whiteboard/:identity/:uuid/:userId/" component={WhiteboardPage} />
                    <Route path="/whiteboard/:identity/:uuid?/" component={WhiteboardCreatorPage} />
                    <Route path="/join/" component={JoinPage} />
                    <Route path="/name/:uuid?/" component={AddNamePage} />
                    <Route path="/test/" component={Test} />
                    <Route path="/create/" component={CreatePage} />
                    <Route path="/storage/" component={Storage} />
                    <Route path="/history/" component={HistoryPage} />
                    <Route path="/" component={IndexPage} />
                </Switch>
            </HashRouter>
        );
    }
}
