#!/bin/bash
scriptdir="$(cd "$(dirname "${BASH_SOURCE[0]}")" && pwd)"
ghdir="${scriptdir%/*}"
basedir="${ghdir%/*}"

datadir="${basedir}/_data"

ff() {
  find "${datadir}" -mindepth 1 -type f | grep -E "${1}" | sort
}

val() {
  for el in $(ff "${1}"); do
    dasel -f "${el}" -r yaml >/dev/null 2>&1 || {
      echo -e "\n[error] invalid file: ${el}"
      dasel -f "${el}" -r yaml
      x=1
    }
  done
}

x=0
val "ya?ml$"
val "csv$"
echo ""
exit ${x}
