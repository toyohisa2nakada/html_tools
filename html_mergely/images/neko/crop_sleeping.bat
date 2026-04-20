
::
:: 同じサイズにcrop(切り取り)する。
:: 実行方法 crop 2.gif 3.gif 4.gif 5.gif 6.gif
:: 2_cropped.pngという5ファイルが作成される。
:: 拡張子をpngにしているのは、なぜか背景透過が反映されないため。
::
:: 複数のpngを横長につなげるのは、以下のコマンドを実行する。
:: magick montage 2_cropped.png 3_cropped.png 4_cropped.png 5_cropped.png 6_cropped.png -tile 5x1 -geometry +0+0 -background none neko5.png
::

@echo off
:: トリミングする領域の設定
set WIDTH=986
set WIDTH2=58
set HEIGHT=935
set HEIGHT2=55
set X=19
set Y=44

set CMD=magick

:: 引数で渡されたファイルをすべて処理
for %%F in (%*) do (
    set "INFILE=%%~F"
    set "BASENAME=%%~nF"

    call :process
)
goto :eof


:process
echo 処理中: %INFILE%


"%CMD%" "%INFILE%" -crop %WIDTH%x%HEIGHT%+%X%+%Y% +repage -resize %WIDTH2%x%HEIGHT2% -background none "%BASENAME%_cropped.png"

goto :eof
