async function fetch_json(url) {
  let response = await fetch(url)
  let data = await response.json()
  return data
}

function render_milestones() {
  var milestones = $('#milestones')
  fetch_json('https://api.github.com/repos/rdmorganiser/rdmo/milestones')
    .then(res => {
      res.sort((a, b) => parseFloat(a.updated_at) - parseFloat(b.updated_at))
      return res
    })
    .then(res => {
      res.forEach(function (el) {
        milestones.append('<div class="milestone ' + el.id + '"></div>')
        var sel = '.milestone' + '.' + el.id
        var milestone = $(sel)
        var html = '<h2 class="milestone-title-link"><a href="' + el.html_url + '" target=_blank>' + el.title +
          '</a></h2>'
        html += '<div class="milestone-meta">'
        html += '<span>' + time_diff('due by', el.due_on, '', 'no due date') + '</span>'
        html += '<span>' + time_diff('updated', el.updated_at, 'ago', '') + '</span>'
        html += '</div>'
        html += '<div class="milestone-stats">'
        html += '<span>open issues ' + el.open_issues + '</span>'
        html += '<span>closed issues ' + el.closed_issues + '</span>'
        html += '</div>'
        html += '</div>'
        milestone.append(html)
      })
    }).catch(error => {
      milestones.append('<br>The roadmap is currently not available. Please try again later.')
      console.error('[error] ' + error)
    })
}

function time_diff(pref, dat, postf, defr) {
  if (dat === null) {
    return defr
  }
  var date1 = new Date(dat)
  var date2 = new Date()
  if (!(date1 instanceof Date && date2 instanceof Date)) {
    throw new RangeError('Invalid date arguments')
  }

  const timeIntervals = [31536000, 2628000, 604800, 86400, 3600, 60, 1]
  const intervalNames = ['year', 'month', 'week', 'day', 'hour', 'minute', 'second']

  const diff = Math.abs(date2.getTime() - date1.getTime()) / 1000
  const index = timeIntervals.findIndex(i => (diff / i) >= 1)
  const n = Math.floor(diff / timeIntervals[index])
  const interval = intervalNames[index]
  return pref + ' ' + localize(n, interval) + ' ' + postf
}

function localize(value, str) {
  if (value != 1) {
    str += 's'
  }
  return `${value} ${str}`
}
