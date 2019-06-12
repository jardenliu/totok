#!/bin/sh

projectName=totok
configuration=Realse

THIS_DIR=$(dirname "$0")
cd "$THIS_DIR/../macos"

xcodebuild clean -workspace ${projectName}.xcodeproj/project.xcworkspace -scheme ${projectName} -configuration ${configuration}
xcodebuild archive -workspace ${projectName}.xcodeproj/project.xcworkspace -scheme ${projectName}  -configuration ${configuration}  -archivePath ../macos/build/${projectName}.bundle
