class Dashboard {
    constructor(element) {
        if (!element instanceof HTMLElement) {
            throw new Error('Передан не HTMLElement');
        }

        this.element = element;

        this.getList();
    }

    getList(page = 0) {
        if (page === 0) {
            this.list = [];
        }

        request({
            url: `${Dashboard.BASE_API_URL}/user`,
            headers: {
                'app-id': Dashboard.APP_ID
            },
            params: { page },
            onSuccess: (data) => {
                this.list = [...this.list, ...data.data];

                if ((data.page + 1) * data.limit >= data.total) {
                    this.render();

                    return;
                }

                this.getList(page + 1);
            }
        });
    }

    render() {
        this.element.innerHTML = '';

        this.element.appendChild(templateEngine(
            this.list.map(Dashboard.itemTemplate)
        ));
    }
}

Dashboard.APP_ID = '623a0cca3f69bb26dfa5d3f0';
Dashboard.BASE_API_URL = 'https://dummyapi.io/data/v1';

Dashboard.itemTemplate = (user) => ({
    tag: 'article',
    cls: 'dashboard__user',
    content: [
        {
            tag: 'img',
            cls: 'dashboard__user-avatar',
            attrs: {
                src: user.picture,
            }
        },
        {
            tag: 'div',
            cls: 'dashboard__user-title',
            content: user.firstName + ' ' + user.lastName,
        },
        {
            tag: 'i',
            cls: ['fa', 'fa-times'],
        }
    ],
});