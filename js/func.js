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
    }).bind('filterInit', function() {
        display_no_entries();
    }).bind('filterEnd', function() {
        display_no_entries();
    });
}

function display_no_entries() {
    $(".no_entries").html("");
    $(".no_entries").html(
        len_minus_one($('#partners tr:visible')) + "/" + len_minus_one($('#partners tr'))
    );
}

function len_minus_one(arr){
    return arr.length-1
}

function open_marker(id, coords, desc_length) {
    coords = [coords[0] + (0.0007 * desc_length), coords[1]];
    map.setView(coords, 9);
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
        .replace(/[\s\/'`]/g, '-')
        .match(rx)
        .join('')
        .replace(/-{2,}/g, '-');
}

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

function get_marker_path(marker_filename, baseurl) {
    if (baseurl != '') {
        baseurl = baseurl + '/'
    }
    else {
        baseurl = ''
    }

    icon_path = baseurl + 'img/icons/' + marker_filename

    return icon_path    
    // if (marker_name == 'green') {
    //     icon_path = 'img/icons/marker-icon-green.png'
    // }
    // if (marker_name == 'blue') {
    //     icon_path = '/img/icons/marker-icon-blue.png'
    // }
}
