//const data = [
//    { id: 1, author: 'DATA LOCAL', text: 'Hello ReactJS.NET World!' },
//    { id: 2, author: 'Pete Hunt', text: 'This is one comment' },
//    { id: 3, author: 'Jordan Walke', text: 'This is *another* comment' },
//];

class Comment extends React.Component {
    render() {
        return React.createElement('div',
            { className: 'comment' },
            React.createElement('h2',
                { className: 'commentAuthor' },
                `hello ${this.props.author}`),
            `${this.props.children}`
        );
    }
}

class CommentList extends React.Component {
    render() {
        const commentNodes = this.props.data.map(comment => React.createElement(Comment, {
            author: comment.author,
            children: comment.id
        }, comment.text));

        return React.createElement('div', {
            className: 'commentList',
            children: commentNodes
        });
    }
}

class CommentForm extends React.Component {
    render() {
        return React.createElement('div',
            { className: 'commentForm' },
            'Hello, world! I am a CommentForm.',
        );
    }
}

class CommentBox extends React.Component {
    constructor(props) {
        super(props);
        this.state = { data: [] };
    }
    loadCommentsFromServer() {
        const xhr = new XMLHttpRequest();
        xhr.open('get', this.props.url, true);
        xhr.onload = () => {
            const data = JSON.parse(xhr.responseText);
            this.setState({ data: data });
        };
        xhr.send();
    }
    componentDidMount() {
        this.loadCommentsFromServer();
        window.setInterval(
            () => this.loadCommentsFromServer(),
            this.props.pollInterval,
        );
    }
    render() {
        return React.createElement('div',
            { className: 'commentBox' },
            React.createElement('h1',
                { className: 'commentBox' },
                'Comments'
            ),
            React.createElement(CommentList, { data: this.state.data })
        );
    }
}

ReactDOM.render(
    React.createElement(CommentBox, { url: "/comments", pollInterval: 2000 }),
    document.getElementById('content'),
);