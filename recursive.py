def countdown(i):
	print(i) 
	if i <=0:
		return
	else:
		countdown(i-1)
		
print(countdown(10))