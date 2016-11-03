var vm = new Vue({
    el: '#view',
    data: {
        xjson:[],
        apiUrl: '../url.json'
    },
    mounted: function () {
        var self = this;
        fetch(this.apiUrl)
        .then(function(response) {
             return response.json();
        }).then(function(json) {
            self.xjson=json;
        }).catch(function(ex) {
            console.log('parsing failed', ex)
        })
    
    }

})