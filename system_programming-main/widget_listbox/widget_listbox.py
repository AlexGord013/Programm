from tkinter import *

def work():
    spisok = ['apple', 'bananas', 'carrot', 'bread', 'butter', 'meat', 'potato', 'pineapple', 'tomato', 'milk']

    def right():
        select = list(box.curselection())
        select.reverse()
        for i in select:
            box2.insert(END, box.get(i))
            box.delete(i)

    def left():
        select = list(box2.curselection())
        select.reverse()
        for i in select:
            box.insert(END, box2.get(i))
            box2.delete(i)

    root = Tk()
    box = Listbox(selectmode=EXTENDED)
    for i in spisok:
        box.insert(END, i)
    box2 = Listbox(selectmode=EXTENDED)

    f = Frame()
    Button(f, text=">>>", command=right).pack(fill=X)
    Button(f, text="<<<", command=left).pack(fill=X)
    box.pack(side=LEFT)
    box2.pack(side=RIGHT)
    f.pack(side=LEFT)
    root.mainloop()
work()
