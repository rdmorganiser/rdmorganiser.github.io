#!/usr/bin/python3

import json
import yaml
import sys


infile = 'locations_to_edit.yml'
outfile = 'locations.yml'


def read_yaml(filename):
    with open(filename, 'r') as stream:
        try:
            return(yaml.load(stream))
        except yaml.YAMLError as exc:
            print(exc)
            sys.exit(1)


def write_yaml(data, filename):
    with open(filename, 'w') as outfile:
            yaml.dump(
                data, outfile,
                default_flow_style=False,
                encoding='utf-8',
                indent=4
            )


def print_data(data):
    print(json.dumps(data, sort_keys=True, indent=4))


if __name__ == '__main__':
    data = read_yaml(infile)
    data = sorted(data, key=lambda k: k['name'])
    write_yaml(data, outfile)
