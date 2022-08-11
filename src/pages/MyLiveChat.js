import {Card, CardContent} from "@material-ui/core";
import {Title, useQuery} from "react-admin";

const MyLiveChat = () => {
    const {data: liveChats, loading, error} = useQuery({
        type: 'getList',
        resource: 'my_live_chats',
        payload: {
            pagination: {page: 1, perPage: 1},
            sort: {order: 'DESC'},
            filter: {},
        },
    });

    return (
        <Card>
            <Title title="Live Chat" />
            <CardContent style={{
                margin: 0,
                padding: 0,
                overflow: 'hidden'
            }}>
                {!loading && <iframe title="My Live Chat" src={liveChats[0].url} frameborder="0" height="100%" width="100%" style={{
                    overflow: 'hidden',
                    minHeight: 'calc(100vh - 100px)',
                    width:'100%'
                }}/>}
            </CardContent>
        </Card>
    )
}

export default MyLiveChat;