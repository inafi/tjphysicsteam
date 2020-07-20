import codecs
import re
import glob
import os

result = []
PATH = "/Users/nafi/Develop/GitHub/tjphysicsteam/"
for x in os.walk(PATH):
    for y in glob.glob(os.path.join(x[0], '*.html')):
        if "old" not in y:
            result.append(y)

for name in result:
    orig = ""
    for i in codecs.open(name, 'r'):
        if 'rel="stylesheet"' in i and '.css' in i and len(i.split('href="')[1].split("/")) == 2:
            if "version=" not in i:
                i = i.replace('">', '?version=1">')
            else:
                num = int(re.search('version=(.*)"', i).group(1)) + 1
                i = re.sub('version=(.*)"', "version=" + str(num) + '"', i)
        orig += i

    w = open(name, 'w')
    w.write(orig)
