import codecs
import re
import glob
import os

result = []
PATH = "/site/public/"
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
        if '<script' in i and len(i.split("/")) == 3:
            if "?v=" not in i:
                i = i.replace('"><', '?v=1"><')
            else:
                num = int(re.search('v=(.*)">', i).group(1)) + 1
                i = re.sub('v=(.*)">', "v=" + str(num) + '">', i)
        orig += i

    command = "html-minifier --collapse-whitespace --remove-comments --remove-tag-whitespace --minify-css true " + name + " -o " + name
    os.system(command)

    w = open(name, 'w')
    w.write(orig)

# minifier

result = []
PATH = "/site/public/JS"
for x in os.walk(PATH):
    for y in glob.glob(os.path.join(x[0], '*.js')):
        if "custom/" not in y and "calendar/" not in y and "min." not in y:
            result.append(y)

for i in result:
    name = i
    os.system("terser %s --compress --mangle --output %s" % (i, name))

result = []
PATH = "/site/public/CSS"
for x in os.walk(PATH):
    for y in glob.glob(os.path.join(x[0], '*.css')):
        if "fonts/" not in y and "calendar/" not in y and "min." not in y:
            result.append(y)

for i in result:
    name = i
    os.system("cleancss -o %s %s" % (i, name))