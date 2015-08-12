/**
 * Created by ben7664 on 8/12/2015.
 */

class App {

    _getAllLegNames() {
        let url = "https://congress.api.sunlightfoundation.com/legislators?per_page=all&apikey=88036ea903bf4dffbbdc4a9fa7acb2ad";
        this.legislators = [];
        this.allLegislators = [];

        $.getJSON(url, (data) => {
            this.allLegislators = data.results;
        })
    }
}