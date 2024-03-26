import sys


def reducer():
    current_word = None
    doc_list = []
    for line in sys.stdin:
        line = line.strip()
        word, document = line.split("\t", 1)
        if current_word == word:
            doc_list.append(document)
        else:
            if current_word:
                print(f"{current_word}\t{', '.join(set(doc_list))}")
                doc_list = [document]
            current_word = word
        if current_word:
            print(f"{current_word}\t{', '.join(set(doc_list))}")


if __name__ == "__main__":
    reducer()
