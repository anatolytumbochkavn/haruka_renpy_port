# Haruka Renpy Port
A tool created to port the game _Haruka no Sora_ to _Renpy_. The reasons for writing this project are many: the difficulty of getting a version of the game on _KiriKiri_; the ease of use of _Renpy_ and the ability to add your own customizations such as interface or menus; and the ability to significantly reduce the size of the game by changing the extension of pictures and sounds. It is important to note that the program is still under development, so only Sora's route files are available for translation to _Renpy_ (attempts to port other files will fail).

Инструмент, созданный для того, чтобы портировать игру _Haruka no Sora_ на _Renpy_. Причин написания этого проекта много: сложность получить версию игры на _KiriKiri_; простота использования _Renpy_ и возможность добавлять собственные наработки, такие как интерфейс или меню; возможность существенно уменьшить размер игры за счёт изменения расширения картинок и звуков. Важно отметить, что программа ещё находится на стадии разработки, из-за чего пока что для перевода на _Renpy_ доступны только файлы рута Соры (попытка портировать другие файлы не увенчается успехом).

# Usage
> You must have [_Node.js_](https://nodejs.org/ru) installed on your computer to use the program!

In order to use the application, follow these instructions:
1. Create several folders with the following names: _cg_, _voice_, _sprites_, _sound_, _output_, _translated_text_, _splitted_strings_output_. If you choose other names for the folders, the program will generate an error.
2. Move all backgrounds, tools like dialog box and other images to the _cg_ folder, character phrases to the _voice_ folder, sprite files to the _sprites_ folder, and sounds and music to the _sound_ folder.
3. Navigate to the folder path at the command line and type _node script_ – you'll get the finished files with the _.rpy_ extension in the _output_ folder. The _initialize.rpy_ file will declare all the files that were in the created folders. There you can also see where to place certain files already in the _Renpy_ project (for example, character phrases will have the following location: _audio/voice/AK000001_).
4. __The project has a programme that allows you to cut long strings! __ After you have translated all received files with extension _.rpy_ into your language, put them in the _translated_text_ folder. Next, write _node split_long_phrases_ in the console (by navigating to the project folder as in step 3). As a result, you will get the same files in the _splitted_strings_output_ folder, but all long strings in each file will be trimmed.

__Comments on paragraph 4:__
1. This feature allows you, for example, to add comments to certain character phrases - for example, the meaning of a particular Japanese item of clothing, holiday, and the like.
2. The programme has some limit by which it determines when to split a line. Go to the _split_long_phrases.js_ file and find the line _const index = 39_ - this is the maximum value for the number of words in a string, meaning that any string with a word count greater than 39 will be split into two lines. You can change the value 39 to any value you like.
3. It is important to note that if your string length is even longer than _index * 2_, the programme will still be able to split your string into 3 phrases, but the case of splitting one string into 4 phrases is not provided.

> Для работы с программой нужно обязательно иметь установленный на компьютере [_Node.js_](https://nodejs.org/ru)!

Для того чтобы использовать приложение, следуйте этим указаниям:
1. Создайте несколько папок со следующими именами: _cg_, _voice_, _sprites_, _sound_, _output_, _translated_text_, _splitted_strings_output_. Если вы выберете другие имена для папок, то программа выдаст ошибку.
2. Перенесите все фоны, инструменты вроде диалогового окна и прочие изображения в папку _cg_, фразы персонажей – в папку _voice_, файлы спрайтов – в папку _sprites_, а звуки и музыку – в папку _sound_.
3. Перейдите по пути к папке в командной строке и введите _node script_ – вы получите готовые файлы с расширением _.rpy_ в папке _output_. В файле _initialize.rpy_ будут объявлены все файлы, находившиеся в созданных папках. Там же вы можете посмотреть, куда поместить те или иные файлы уже в проекте _Renpy_ (например, фразы персонажей будут иметь следующее расположение: _audio/voice/AK000001_).
4. __В проекте есть программа, позволяющая обрезать длинные строки!__ После того как вы переведёте все полученные файлы с расширением _.rpy_ на ваш язык, поместите их в папку _translated_text_. Далее напишите в консоли (перейдя по пути к папке проекта, как в пункте 3) _node split_long_phrases_. В результате вы получите эти же файлы в папке _splitted_strings_output_, но все длинные строки в каждом файле будут обрезаны.

__Замечания по пункту 4:__
1. Данная функция позволяет вам, к примеру, добавлять комментарии к некоторым фразам персонажей – например, значение того или иного японского предмета одежды, праздника и тому подобного.
2. У программы есть некоторый предел, по которому она определяет, когда нужно разделять строку. Перейдите в файл _split_long_phrases.js_ и найдите строку _const index = 39_ – это максимальное значение количества слов в строке, то есть любая строка с количеством слов, превышающим 39, будет разделена на две строки. Вы можете изменить значение 39 на любое по своему усмотрению.
3. Важно отметить, что если длина вашей строки даже больше, чем _index * 2_, то программа всё равно сможет разделить вашу строку на 3 фразы, однако случай с разделением одной строки на 4 фразы не предусмотрен.

# Important mentions
There are a few things you should keep in mind when working on this project:
1. The _scenario_ folder already contains Sora's route files in _.ks_ format. They were taken from [English translation of the novel](https://trjr.wordpress.com/download/).
2. In order to significantly reduce the size of your project on _Renpy_ compared to the original weight of the game, it is important to change the file extensions. The best thing to do would be to change the format _.png_/_.jpg_ to _.webp_, and _.mp3_/_.wav_ to _.opus_. In this way a reduction in file size will be achieved.
3. The game has a small resolution – only 800×600 pixels, and therefore you should work on increasing the resolution of all images, otherwise many users may find the novel uncomfortable to pass comfortably.

При работе с данным проектом вам следует не забыть о некоторых вещах:
1. В папке _scenario_ уже находятся файлы рута Соры в формате _.ks_. Они были взяты с [перевода новеллы на английский язык](https://trjr.wordpress.com/download/).
2. Для того чтобы существенно уменьшить размер вашего проекта на _Renpy_ по сравнению с изначальным весом игры, важно менять расширения файлов. Лучше всего будет сделать так: поменять формат _.png_/_.jpg_ на _.webp_, а _.mp3_/_.wav_ – на _.opus_. Таким образом будет достигнуто уменьшение размера файлов.
3. Игра имеет малое разрешение – всего 800×600 пикселей, и поэтому вам стоит поработать над увеличением разрешения всех изображений, иначе новелла может показаться многим пользователям неудобной для комфортного прохождения.
