# функция для ввода текста

def get_text():

while True:

choice - input("Хотите ввести текст вручную или загрузить из файла? (введите "ручной" или "файл"): ").lower()

if choice "ручной":

text Input("Введите текст: ")

break

elif choice файл":

try:

filename input("Введите имя файла: ")

with open(filename, 'r', encoding='utf-8') as file:

text file.read()

break

except FileNotFoundError:

print("Файл не найден. Попробуйте снова.")

else:

print("Неверный выбор. Попробуйте еще раз.")

return text

# Функция для анализа текста

def analyze_text(text):

# Подсчет общего количества символов

total_chars len(text)

# Разделение текста на слова

words text.split()

# Подсчет количества слов

word count len(words)

# Нахождение самого длинного слова

longest word max(words, key-len)

# Подсчет частоты каждого словаword_freq = {}

for word in words:

if word in word_freq:

word_freq[word] += 1

else:

word_freq[word] = 1

# Нахождение самого частого слова

most_common_word = sorted (word_freq.items(), key=lambda x: x[1], reverse-True) [0][0]

# Вычисление средней длины слова

average_word_length = sum(len(word) for word in words) / word_count if word_count > 0 else 0

# Определение процента букв и знаков препинания

letters_and_punctuation - 0

for char in text:

if char.isalpha() or char in ',.!?':

letters_and_punctuation +1

letter_percentage = (letters_and_punctuation / total_chars) 100 if total_chars > 6 else 0

return {

'total_chars': total_chars,

'word_count':

word_count,

'longest_word':

longest_word,

'most_common_word':

most_common_word,

"average_word_length': round(average_word_length, 2),

'letter_percentage': round(letter_percentage, 2)

}

# Основная функция

def main():

text get_text()66 # Основная функция

67

68

def main():

69

text get_text()

results analyze_text(text)

70

71

72

73

74

75

76

77

78

79

print("\презультаты анализа текста:")

print(f"Общее количество символов: (results['total_chars']}")

print(f"Количество слов: (results['word_count']}")

print(f"Самое длинное слово: '{results['longest_word']}'")

print(f"Самое частое слово: '{results['most_common_word*]}'")

print("Средняя длина слова: (results['average_word_length']}")

print("Процент букв и знаков препинания: (results['letter_percentage']}%")

80

81

if_name_ "main":

main()