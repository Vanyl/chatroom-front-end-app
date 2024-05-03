import './ChatRoom.css';

const ChatRoom = () => {
    return (
        <>
        <div className="window">
            <div className="user-box">
                <ul className='user-list'>
                    <li className=''>
                        <div>img</div>
                        <div>Name</div>
                    </li>
                    <li className=''>
                        <div>img2</div>
                        <div>Name2</div>
                    </li>
                </ul>
            </div>

            <section className="chat-box">
                <header className="chat-header">
                    <div>chat with...</div>
                    <button className='log-out'>log out</button>
                </header>
                <div className='chat-messages'>
                <ul>
                    <li>
                        <div className='message-data'>
                            <span className='message-data-user'>user</span>
                            <div className='message my-message'>the message</div>
                        </div>
                    </li>
                </ul>
                </div>
                <div className='message-to-send-area'>
                    <textarea name="message-to-send" id="message-to-send" placeholder="type your message" cols="30" rows="3"></textarea>
                    <button>send</button>
                </div>
            </section>
        </div>
        </>
    )
}

export default ChatRoom