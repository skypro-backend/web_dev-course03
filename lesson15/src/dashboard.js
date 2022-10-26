class Dashboard {
    constructor(element) {
        if (!element instanceof HTMLElement) {
            throw new Error('Передан не HTMLElement');
        }

        this.element = element;

        this.getList();
    }

    getList() {
        request({
            url: `${Dashboard.BASE_API_URL}/user`,
            headers: {
                'app-id': Dashboard.APP_ID
            },
            onSuccess: (data) => {
                console.log(data);
            }
        });
    }
}

Dashboard.APP_ID = '623a0cca3f69bb26dfa5d3f0';
Dashboard.BASE_API_URL = 'https://dummyapi.io/data/v1';