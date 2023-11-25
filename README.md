# Haruka Ren'Py Port
A tool created to port the game _Haruka na Sora_ to _Ren'Py_. The reasons for writing this project are many: the difficulty of getting a version of the game on _KiriKiri_; the ease of use of _Ren'Py_ and the ability to add your own customizations such as interface or menus; and the ability to significantly reduce the size of the game by changing the extension of pictures and sounds. It is important to note that the program is still under development, so only Sora's route files are available for translation to _Ren'Py_ (attempts to port other files will fail).

Инструмент, созданный для того, чтобы портировать игру _Haruka na Sora_ на _Ren'Py_. Причин написания этого проекта много: сложность получить версию игры на _KiriKiri_; простота использования _Ren'Py_ и возможность добавлять собственные наработки, такие как интерфейс или меню; возможность существенно уменьшить размер игры за счёт изменения расширения картинок и звуков. Важно отметить, что программа ещё находится на стадии разработки, из-за чего пока что для перевода на _Ren'Py_ доступны только файлы рута Соры (попытка портировать другие файлы не увенчается успехом).

# Usage
> You must have [_Node.js_](https://nodejs.org/ru) installed on your computer to use the program!

In order to use the application, follow these instructions:
1. Move all backgrounds, tools like dialog box and other images to the _cg_ folder, character phrases to the _voice_ folder, sprite files to the _sprites_ folder, and sounds and music to the _sound_ folder.
2. Navigate to the folder path at the command line and type _node script_ – you'll get the finished files with the _.rpy_ extension in the _output_ folder. The _initialize.rpy_ file will declare all the files that were in the created folders. There you can also see where to place certain files already in the _Ren'Py_ project (for example, character phrases will have the following location: _audio/voice/AK000001_).
3. __The project has a programme that allows you to cut long strings!__ After you have translated all received files with extension _.rpy_ into your language, put them in the _translated_text_ folder. Next, write _node split_long_phrases_ in the console (by navigating to the project folder as in step 3). As a result, you will get the same files in the _splitted_strings_output_ folder, but all long strings in each file will be trimmed.

> Для работы с программой обязательно иметь установленный на компьютере [_Node.js_](https://nodejs.org/ru)!

Для того чтобы использовать приложение, следуйте этим указаниям:
1. Перенесите все фоны, инструменты вроде диалогового окна и прочие изображения в папку _cg_, фразы персонажей – в папку _voice_, файлы спрайтов – в папку _sprites_, а звуки и музыку – в папку _sound_.
2. Перейдите по пути к папке в командной строке и введите _node script_ – вы получите готовые файлы с расширением _.rpy_ в папке _output_. В файле _initialize.rpy_ будут объявлены все файлы, находившиеся в созданных папках. Там же вы можете посмотреть, куда поместить те или иные файлы уже в проекте _Ren'Py_ (например, фразы персонажей будут иметь следующее расположение: _audio/voice/AK000001_).
3. __В проекте есть программа, позволяющая обрезать длинные строки!__ После того как вы переведёте все полученные файлы с расширением _.rpy_ на ваш язык, поместите их в папку _translated_text_. Далее напишите в консоли (перейдя по пути к папке проекта, как в пункте 3) _node split_long_phrases_. В результате вы получите эти же файлы в папке _splitted_strings_output_, но все длинные строки в каждом файле будут обрезаны.

# Important mentions
There are a few things you should keep in mind when working on this project:
1. The _scenario_ folder already contains Sora's route files in _.ks_ format. They were taken from [English translation of the novel](https://trjr.wordpress.com/download/).
2. In order to significantly reduce the size of your project on _Ren'Py_ compared to the original weight of the game, it is important to change the file extensions. The best thing to do would be to change the format _.png_/_.jpg_ to _.webp_, and _.mp3_/_.wav_ to _.opus_. In this way a reduction in file size will be achieved.
3. The game has a small resolution – only 800×600 pixels, and therefore you should work on increasing the resolution of all images, otherwise many users may find the novel uncomfortable to pass comfortably.

При работе с данным проектом вам следует не забыть о некоторых вещах:
1. В папке _scenario_ уже находятся файлы рута Соры в формате _.ks_. Они были взяты с [перевода новеллы на английский язык](https://trjr.wordpress.com/download/).
2. Для того чтобы существенно уменьшить размер вашего проекта на _Ren'Py_ по сравнению с изначальным весом игры, важно менять расширения файлов. Лучше всего будет сделать так: поменять формат _.png_/_.jpg_ на _.webp_, а _.mp3_/_.wav_ – на _.opus_. Таким образом будет достигнуто уменьшение размера файлов.
3. Игра имеет малое разрешение – всего 800×600 пикселей, и поэтому вам стоит поработать над увеличением разрешения всех изображений, иначе новелла может показаться многим пользователям неудобной для комфортного прохождения.
