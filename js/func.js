function init_table() {
    $("#partners").tablesorter({
        delayInit: true,
        widgets: ['zebra', 'columns', 'filter'],
        headers: {
            0: {
                sorter: true,
                sortInitialOrder: "asc"
            },
            1: {
                sorter: true
            }
        },
        widgetOptions: {
            filter_external: '.tabfilter',
            filter_columnFilters: false,
            filter_searchDelay: 300,
            filter_startsWith: false,
        },
        sortList: [
            [0, 0],
        ]
    });
}

function open_marker(id) {
    for (var i in markers) {
        if (markers[i].id == id) {
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            });
            markers[i].openPopup();
        };
    }
}

function slugify(text) {
    var rx = /[0-9a-zßäöü\-]/g;
    return text.toString().toLowerCase()
        .replace(/[\s\/'"`]/g, '-')
        .match(rx)
        .join('')
        .replace(/-{2,}/g, '-');
}

// in js call: #centre-de-calcul-d-in2p3

function test_markers() {
    table_ids = [];
    var table = document.getElementById('partners');
    for (var i = 0, row; row = table.rows[i]; i++) {
        for (var j = 0, col; col = row.cells[j]; j++) {
            if (col.id != '') {
                table_ids.push(col.id);
            }
        }
    }
    for (var i in markers) {
        m = markers[i].id;
        r = table_ids.includes(m);
        if (r === false) {
            console.log('Marker not found: ' + m);
        }
    }
}
